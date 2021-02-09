class Test2 {
    set testProp(a) {
        if (a == '') {
            return false;
        }
        this._testProp = a;
        return a;
    }

    setTestProp(a) {
        if (a == '') {
            return false;
        }
        this._testProp = a;
        return a;
    }

    get testProp() {
        return this._testProp;
    }
}