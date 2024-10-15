export default function LabelInputPair({id, labelText, type, onChange, value}) {
    return <div>
        <label htmlFor={id}>{labelText}</label>
        <input id={id} type={type} onChange={onChange} value={value} />
    </div>
}