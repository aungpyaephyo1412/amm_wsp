import {useUserName} from "@/context/userNameContext";
const Index = () => {
    const name = useUserName();
    console.log(name)
    return (
        <div>
          Hello World
            <div>
                    About
            </div>
        </div>
    );
};

export default Index;
