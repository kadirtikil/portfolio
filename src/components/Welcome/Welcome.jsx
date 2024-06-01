import './Welcome.css'

export default function Welcome({data}) {

    return (
        <div className="rootWelcome">
            <h1>{data['welcome']}</h1>
            <p>
                {data['welcome_text']}
                <br /><br />
                {data['outro']}
            </p>
        </div>
    )
}