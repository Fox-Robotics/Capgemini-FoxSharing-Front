async function test(){
    const res = await fetch("https://foxsharing.azurewebsites.net/cars");
    const x = await res.json();
    console.log(x);
    return x;
}