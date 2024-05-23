import { deleteAsync } from "del"

async function del() {
	const delFolder: any = await deleteAsync(["build", "types", "coverage"])
	console.log("Deleted directories:\n", delFolder.join("\n"))
}

del()

export {}
