import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'timeAgo' })
export class TimeAgoPipe implements PipeTransform {

    timeDiffInMs = {
        minute: 60 * 1000,
        hour: 60 * 60 * 1000,
        day: 60 * 60 * 24 * 1000,
        week: 60 * 60 * 24 * 7 * 1000,
        month: 60 * 60 * 24 * 30 * 1000,
        year: 60 * 60 * 24 * 365 * 1000
    };

    transform(value: string | Date): string {
        const now = Date.now();
        const then = new Date(value).getTime();
        const diff = now - then;
        if (diff < this.timeDiffInMs.minute) {
            return "Il y a quelques secondes";
        } else if (diff < this.timeDiffInMs.hour) {
            return "Il y a quelques minutes";
        } else if (diff < this.timeDiffInMs.day) {
            return "Il y a quelques heures";
        } else if (diff < this.timeDiffInMs.week) {
            return "Il y a quelques jours";
        } else if (diff < this.timeDiffInMs.month) {
            return "Il y a quelques semaines";
        } else if (diff < this.timeDiffInMs.year) {
            return "Il y a quelques mois";
        } else {
            return "Il y a plus d'un an";
        }
    }

} 