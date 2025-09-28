export var activities: Activity[] = [];
export var activityTypes: string[] = ['Study', 'Workout', 'Yoga', 'Commute', 'Cooking', 'Games', 'Party', 'Sleep']; 
export var idCounter = 0; 

export class Activity {
    id: number; 
    name: string;
    spotifyId: string; 
    activityType: string; 
    timeStart: string; 
    timeEnd: string; 


    constructor() {
        this.id = idCounter; 
        this.name = "Unnamed item"; 
        this.spotifyId = ""; 
        this.activityType = "Study"; 
        this.timeStart = "12:00AM"; 
        this.timeEnd = "12:01AM"; 

        idCounter = idCounter + 1; 
    }

    getName(): string {
        return this.name; 
    }

    getSpotifyId(): string {
        return this.spotifyId; 
    }

    setName(name: string): void {
        this.name = name; 
    }

    setSpotifyId(spotifyId: string): void {
        this.spotifyId = spotifyId;
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
    activity.setSpotifyId(generateSpotifyPlaylistHyperlink(activityType)); 
    activity.setActivityType(activityType); 
    activity.setTimeStart(timeStart.concat(" - ")); 
    activity.setTimeEnd(timeEnd); 

    activities.push(activity); 
}

export function generateSpotifyPlaylistHyperlink(activityType: string): string {
    var playlistHyperlink: string; 

    switch(activityType) {
        case "Study": 
            playlistHyperlink = '37i9dQZF1DX8Uebhn9wzrS'; 
            break; 
        case "Workout": 
            playlistHyperlink = '37i9dQZF1EIgzSCNweQzPQ'; 
            break;  
        case "Yoga": 
            playlistHyperlink = '37i9dQZF1DX9uKNf5jGX6m';     
            break;  
        case "Commute": 
            playlistHyperlink = '37i9dQZF1DWWMOmoXKqHTD'; 
            break;  
        case "Cooking": 
            playlistHyperlink = '5XTJj1e28HuFxzDwgc2AUj'; 
            break;  
        case "Games": 
            playlistHyperlink = '37i9dQZF1DWTyiBJ6yEqeu'; 
            break;
        case "Party": 
            playlistHyperlink = '37i9dQZF1DWWylYLMvjuRG'; 
            break;
        case "Sleep": 
            playlistHyperlink = '37i9dQZF1DWZd79rJ6a7lp'; 
            break;
        default: 
            playlistHyperlink = '37i9dQZF1DX8Uebhn9wzrS'; 
    }

    return playlistHyperlink; 
}