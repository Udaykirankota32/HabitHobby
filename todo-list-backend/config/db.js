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