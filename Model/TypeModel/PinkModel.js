class PinkModel extends TypeModel{
    TypeCalculate(){
        const Type = this.TypeNum;
        const Year = this.Year;
        const Month = this.Month;
        let result = 30 - Month; //calculate
        if(Type != 3){
            return 0;
        }
        return result;
    }
}