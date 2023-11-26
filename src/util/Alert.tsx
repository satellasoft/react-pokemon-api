export const Alert = (message: string, type: string) => {
    return (
        <div className={`alert ${type}`}>{message}</div>
    )
}