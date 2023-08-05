async function loadCards() 
{
    try {
        const response = await fetch('http://127.0.0.1:5500/card.json');//fetch aldıgım verileri metin olarak getirir
        let cardsJson = await response.json(); //burada çektiğim veriyi JSON formatına dönüştürüyoruz 
        console.log(cardsJson);
        //await kesin yazmamız lazım .sen bekle ,
        //burayı bekle dedik, fetch webden veri çekmeye yarar
    } catch (error) {
        alert(error);
    }
}