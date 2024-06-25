export const formatTime = (time: Date) =>
    new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }).format(time)
