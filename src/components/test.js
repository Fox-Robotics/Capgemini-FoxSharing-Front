async function test(){
    const res = await fetch("https://foxsharing.azurewebsites.net/user");
    const x = await res.json();
    console.log(x);
    return x;
}