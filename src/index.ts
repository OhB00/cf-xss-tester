import { getQuery, parseURL } from 'ufo'

export interface Env {}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> 
	{

		let data: string;
		let type: string;

		const parsed = parseURL(request.url)
		const query = getQuery(request.url)

		if (parsed.pathname.endsWith(".js"))
		{
			data = "alert('Wow, the script was loaded!')"
			type = "application/javascript"
		}
		else
		{
			data = `<div>Hello, p1 = ${query.p1 ?? "No value"}</div>`
			type = "text/html"
		}

		const response = new Response(data);
		response.headers.set('Content-Type', type);

		return response;
	},
};
