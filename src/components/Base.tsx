import React, {useState} from "react";

// default function
export const Base = () => {
    return (
    <div>
        Hello
    </div>

    )
};

export const TestA = () => {
    return (
        <div>
            Test A
        </div>
        )    
}

// interface sample 01
interface DataA {
    name: string,
    age?: number,
    key?: number,
    active?: boolean,
    list?: string[],
    someObject?: {
        id: number,
        name: string,
    },
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

export const InterfaceTestA = ({name, age, key}:DataA) => {
    return (
        <div>
            {name} and {age}
        </div>
        )    
}

// Defaulr Props

export const DefaultProps = ({name, age = 99, key}:DataA) => {
    return (
        <div>
            {name} and {age}
        </div>
        )    
}

// Event A + State

export const Event = () => {

    const [task, setTask] = useState(1)

    const onClickEvent:React.MouseEventHandler<HTMLButtonElement> = () => {
        setTask(task+1);
    };

    return (
        <div>
            {task}
            <button onClick={onClickEvent}>
                Click Me
            </button>
        </div>
        )    
}

// Event B + State

export const EventB = () => {

    const [task, setTask] = useState(1)

    return (
        <div>
            {task}
            <button onClick={() => setTask(task+1)}>
                Click Me
            </button>
        </div>
        )    
}

// Event C + State

export const EventC = () => {

    const [task, setTask] = useState(1)

    const doChage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setTask(task+1)
    }

    return (
        <div>
            {task}
            <button onClick={doChage}>
                Click Me
            </button>
        </div>
        )    
}

// Map sample 01

export const MapTestA = () => {

    interface TestMap {
        objectName: {
            name: string,
            age: number,
        }[]
    }

    const data = [
        {name: 'Tiago', age: 12},
        {name: 'Falop', age: 56},
        {name: 'Sicrano', age: 58},
    ];

    const [task, setTask] = useState<TestMap['objectName']>(data)

    console.log(data)

    return (
        <div>
            {task.map((item) => (
                <div>{item.name} and {item.age}</div>
                )
            )}
        </div>
        )    
}