import mongoose from "mongoose";

const dropLegacyIndexes = async () => {
    const collection = mongoose.connection.collection("taskmanagers")

    let indexes = []
    try {
        indexes = await collection.indexes()
    } catch {
        return
    }

    const staleIndexNames = ["id_1", "folderName_1"]

    for (const indexName of staleIndexNames) {
        const index = indexes.find((eachIndex) => eachIndex.name === indexName)

        if (!index) {
            continue
        }

        try {
            await collection.dropIndex(indexName)
            console.log(`Dropped legacy index: ${indexName}`)
        } catch (error) {
            console.log(`Skipping index ${indexName}: ${error.message}`)
        }
    }

    // Some previous schema versions can leave this index as unique, which breaks
    // signup because each user has multiple folder documents with the same email.
    const emailIndex = indexes.find((index) => index.name === "userDetails.email_1")
    if (emailIndex?.unique) {
        try {
            await collection.dropIndex("userDetails.email_1")
            console.log("Dropped legacy unique index: userDetails.email_1")
        } catch (error) {
            console.log(`Skipping index userDetails.email_1: ${error.message}`)
        }
    }

    const refreshedIndexes = await collection.indexes().catch(() => [])
    const hasUserFolderCompoundIndex = refreshedIndexes.some(
        (index) =>
            index.key?.["userDetails.userId"] === 1 &&
            index.key?.folderName === 1 &&
            index.unique === true,
    )

    if (!hasUserFolderCompoundIndex) {
        await collection.createIndex(
            { "userDetails.userId": 1, folderName: 1 },
            {
                unique: true,
                name: "userDetails.userId_1_folderName_1",
                partialFilterExpression: {
                    "userDetails.userId": { $type: "string" },
                    folderName: { $type: "string" },
                },
            },
        )
    }
}

const connectdb=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        await dropLegacyIndexes();
        console.log("Mongodb connected")
    }
    catch(error){
        console.error(error.message)
        process.exit(1)
    }
}

export default connectdb