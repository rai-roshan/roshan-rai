export default function TimelineEvent({ children }) {
    return (
        <div className="flex flex-row mx-2">
            
            <div className="flex flex-row justify-center relative">
                <div className="absolute h-full border-2 bg-gray-600 border-gray-600"></div>
                <div className="absolute bg-blue-600 w-4 h-4 rounded-full"> </div>
            </div>
            { children }
        </div>
    );
}