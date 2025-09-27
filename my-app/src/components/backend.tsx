export var items: Item[] = [];
export var activityTypes: string[] = ['Study', 'Workout', 'Yoga', 'Commute', 'Cooking', 'Games', 'Party', 'Sleep']; 

export class Item {
    name: string;
    spotifyHyperlink: string; 

    constructor() {
        this.name = "Unnamed item"; 
        this.spotifyHyperlink = ""; 
    }

    getName(): string {
        return this.name; 
    }

    getSpotifyHyperlink(): string {
        return this.spotifyHyperlink; 
    }

    setName(name: string): void {
        this.name = name; 
    }

    setSpotifyHyperlink(spotifyHyperlink: string): void {
        this.spotifyHyperlink = spotifyHyperlink;
    }
}

export class Activity extends Item {
    activityType: string; 
    timeStart: string; 
    timeEnd: string; 

    constructor() {
        super(); 
        this.activityType = "Study"; 
        this.timeStart = "12:00AM"; 
        this.timeEnd = "12:01AM"; 
    }

    getActivityType(): string {
        return this.activityType; 
    }

    getTimeStart(): string {
        return this.timeStart; 
    }

    getTimeEnd(): string {
        return this.timeEnd; 
    }

    setActivityType(activityType: string): void {
        if(!activityTypes.includes(activityType)) {
            activityType = activityTypes[0]; 
        }
        this.activityType = activityType; 
    }

    setTimeStart(timeStart: string): void {
        this.timeStart = timeStart;
    }

    setTimeEnd(timeEnd: string): void {
        this.timeEnd = timeEnd;
    }
}


export function addActivity(name: string, activityType: string, timeStart: string, timeEnd: string): void {
    var activity: Activity = new Activity(); 

    activity.setName(name); 
    activity.setSpotifyHyperlink(generateSpotifyPlaylistHyperlink(activityType)); 
    activity.setActivityType(activityType); 
    activity.setTimeStart(timeStart); 
    activity.setTimeEnd(timeEnd); 

    items.push(activity); 
}

export function generateSpotifyPlaylistHyperlink(activityType: string): string {
    var playlistHyperlink: string; 

    switch(activityType) {
        case "Study": 
            playlistHyperlink = ''; 
            break; 
        case "Workout": 
            playlistHyperlink = ''; 
            break;  
        case "Yoga": 
            playlistHyperlink = '';     
            break;  
        case "Commute": 
            playlistHyperlink = ''; 
            break;  
        case "Cooking": 
            playlistHyperlink = ''; 
            break;  
        case "Games": 
            playlistHyperlink = ''; 
            break;
        case "Party": 
            playlistHyperlink = ''; 
            break;
        case "Sleep": 
            playlistHyperlink = ''; 
            break;
        default: 
            playlistHyperlink = ''; 
    }

    return playlistHyperlink; 
}