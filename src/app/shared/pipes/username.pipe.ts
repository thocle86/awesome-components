import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'username' })
export class UsernamePipe implements PipeTransform {
    transform(value: { firstname: string, lastname: string }): string {
        return `${value.lastname.toUpperCase()} ${value.firstname.substring(0, 1).toUpperCase()}${value.firstname.substring(1).toLowerCase()}`;
    }
}