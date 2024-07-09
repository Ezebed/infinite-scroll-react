type Name = {
    name:string
}

export default function HolaMundo({name}:Name)
{
    return(
        <>
            <div className="text-xl px-4 py-2 bg-pink-300 ">hola {name}</div>
        </>
    )
}