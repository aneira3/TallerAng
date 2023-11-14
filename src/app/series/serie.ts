export class Serie {
    position: number;
    title: string;
    platform:string;
    nr_seasons: number;
    description: string;
    direction: string;
    image: string;

    public constructor(position: number, title: string, platform: string, nr_seasons:number, description:string, direction:string, image:string){
        this.position = position;
        this.title = title;
        this.platform = platform;
        this.description = description;
        this.nr_seasons = nr_seasons;
        this.direction = direction;
        this.image = image;
    }
}
