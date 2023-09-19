import Link from "next/link";
import {useUserName} from "@/context/userNameContext";
const Index = () => {
    const name = useUserName();
    console.log(name)
    return (
        <div>
          Hello World
            <div>
                <Link href="/about">
                    About
                </Link>
            </div>
        </div>
    );
};

export default Index;
