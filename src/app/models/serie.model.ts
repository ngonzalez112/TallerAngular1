export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    webpage: string;
    poster: string;

    constructor(id:number, title:string, network:string, seasons:number, description:string, website:string, image:string){
        this.id = id;
        this.name = title;
        this.channel = network;
        this.seasons = seasons;
        this.description = description;
        this.webpage = website;
        this.poster = image;
    }  


}
