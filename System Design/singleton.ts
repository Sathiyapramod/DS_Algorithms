class Singleton {
    private static instance: Singleton;

    // Private constructor to prevent instantiation from outside
    private constructor() {}

    // Public method to initiate instance
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(); // Create a new instance if it doesn't exist
        }
        return Singleton.instance;
    }

    // Example method to demonstrate functionality
    public someBusinessLogic(): string {
        return "Executing some business logic";
    }
}
