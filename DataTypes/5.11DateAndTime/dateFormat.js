function formatDate(date) {
    const now = new Date();
    const diffMs = now - date;
    const diffSec = Math.round(diffMs / 1000);
    const diffMin = Math.round(diffSec / 60);
    const diffHour = Math.round(diffMin / 60);

    if (diffSec < 1) return "right now";
    if (diffMin < 1) return `${diffSec} sec. ago`;
    if (diffHour < 1) return `${diffMin} min. ago`;

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);
    const hour = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}.${month}.${year} ${hour}:${minutes}`;
}

console.log(formatDate(new Date(new Date - 1))); 
console.log(formatDate(new Date(new Date - 30 * 1000))); 
console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); 
console.log(formatDate(new Date(new Date - 86400 * 1000))); 