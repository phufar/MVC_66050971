class CowModel {
    //Check is Cow in Database
    isCowInDatabase(CowCode) {
        return cowDatabase.Cows.some(cow => cow.CowCode === CowCode);
    }
}