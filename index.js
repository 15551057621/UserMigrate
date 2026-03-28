//LiteLoaderScript Dev Helper
/// <reference path="/root/VSCode/Library/JS/index.d.ts" /> 

const userMigrate = {
    mc: (oldName, newName) => {
        const oldUuld = data.name2uuid(oldName);
        const newUuld = data.name2uuid(newName);

        if (!oldUuld && !newUuld) return;

        // === NBT === //
        const oldNbt = mc.getPlayerNbt(oldUuld);
        mc.setPlayerNbt(oldUuld, mc.getPlayerNbt(newUuld));
        mc.setPlayerNbt(newUuld, oldNbt);

        // === 积分榜 === //
        mc.getAllScoreObjectives().forEach(sc => {
            const oldSc = mc.getPlayerScore(oldUuld, sc.name);
            mc.setPlayerScore(oldUuld, sc.name, mc.getPlayerScore(newUuld, sc.name))
            mc.setPlayerScore(newUuld, sc.name, oldSc);
        });
        
    },
    iland: (oldName, newName) => {
        if (!ll.hasExported("ILAPI_PosGetLand")) return;

        const oldUuld = data.name2uuid(oldName);
        const newUuld = data.name2uuid(newName);


    }
}
