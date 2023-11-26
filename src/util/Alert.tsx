export const Alert = (message: string, type: string) => {
    return (
        <div className={`alert alert-${type}`}>{message}</div>
    )
}