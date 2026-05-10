export type UserFormState = {
	success: boolean;
	errors: {
		name?: string[];
		phone?: string[];
		message?: string[];
	};
	error?: string;
};
