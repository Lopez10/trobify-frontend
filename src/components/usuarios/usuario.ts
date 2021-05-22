export abstract class Usuario {
	abstract postUsuarios(usuario: any): Promise<void>;

	protected setCookie(name: string, value: string): void {
		console.log(name, value);
		let expires = '';
		let date = new Date();
		date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
		expires = '; expires=' + date.toUTCString();
		document.cookie = name + '=' + value + expires + '; path=/';
	}
	protected autoRedirect(): void {
		window.location.replace('http://localhost:8080/public/');
	}
}
