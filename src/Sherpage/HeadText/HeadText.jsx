
const HeadText = ({head={Poutlr},text={loramar}}) => {
    return (
        <div className="text-center border-b-4">
            <h1 className="text-5xl font-bold">{head}</h1>
            <p className="text-1xl font-bold">{text}</p>
        </div>
    );
};

export default HeadText;