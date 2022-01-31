import Image from "next/image";

function Login() {
    return (
        <div className="bg-black relative ">
            {/* Login component */}
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4 ">
                {/* logo */}
                <Image className="object-cover rounded-full"
                    src="https://image.shutterstock.com/image-vector/monkey-sunglasses-cool-gorilla-600w-1063902011.jpg"
                    height={200} width={200}
                />
                {/* logoin button */}
                <button
                    className="bg-yellow-500 rounded-lg  p-5 font-bold animate-bounce"
                >
                    Login to MetaVerse
                </button>
            </div>
            <div className="h-screen">
                {/* bg-image */}
                <Image
                    src="https://links.papareact.com/55n"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div >
    );
}

export default Login;
