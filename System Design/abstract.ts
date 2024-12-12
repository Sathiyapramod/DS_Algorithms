// Product interfaces
interface Button {
    render(): void;
}

interface Checkbox {
    render(): void;
}

// Creating Concrete products for Windows
class WindowsButton implements Button {
    render(): void {
        console.log("windows button is rendered");
    }
}

class WindowsCheckbox implements Checkbox {
    render(): void {
        console.log("windows checkbox is rendered");
    }
}

// Creating Concrete products for Mac
class MacButton implements Button {
    render(): void {
        console.log("mac button is rendered");
    }
}
class MacCheckBox implements Checkbox {
    render(): void {
        console.log("mac Checkbox is rendered");
    }
}

// Abstract factory interface
interface GUIFactory {
    createButton(): void;
    createCheck(): void;
}

class WindowsFactory implements GUIFactory {
    createButton(): Button {
        return new WindowsButton();
    }
    createCheck(): Checkbox {
        return new WindowsCheckbox();
    }
}
