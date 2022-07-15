function delay(duration) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, duration);
    });
};

//登陆
export async function login(loginId, loginPwd) {
    await delay(1000);
    if (loginId === 'admin' && loginPwd === '123456') {
        const user = {
            loginId,
            name: '管理员',
        };
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    }
    return null;
}

//退出
export async function loginOut() {
    await delay(1000);
    localStorage.removeItem('user');
}

//是否登陆
export async function whoIAm() {
    await delay(1000);
    const user = localStorage.getItem('user');
    if (user) {
        return JSON.parse(user)
    }
    return null;
}