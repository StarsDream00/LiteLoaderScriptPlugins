"use strict";
ll.registerPlugin("ChatFormat", "消息格式化", [1, 0, 0]);

const rtnMsgs = {};
mc.listen("onChat", (pl, msg) => {
    const time = system.getTimeObj();
    const xuid = pl.xuid;
    if (!rtnMsgs[xuid]) rtnMsgs[xuid] = [];
    if (rtnMsgs[xuid].indexOf(msg) > 0) return false;
    rtnMsgs[xuid].unshift(msg);
    mc.broadcast(
        `${time.h}:${time.m < 10 ? 0 : ""}${time.m} ${pl.getDevice().os} ${
            pl.realName
        }： ${msg}`
    );
    setTimeout(() => rtnMsgs[xuid].pop(), 10000);
    return false;
});
