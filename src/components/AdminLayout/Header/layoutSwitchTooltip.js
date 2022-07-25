export class SwitchLayoutTooltip {
    #role1 = 'admin';
    #role2 = 'user';

    roleAdmin() {
        return this.#role1
    }

    roleUser() {
        return this.#role2
    }
}

export default SwitchLayoutTooltip;