let current: (() => void) | null = null;

export function createSignal<T>(initialValue: T): [() => T, (newValue: T) => void] {
    let value = initialValue;
    const subscribers: (() => void)[] = [];

    function read(): T {
        if (current) {
            subscribers.push(current);
        }
        return value;
    }

    function set(newValue: T): void {
        value = newValue;
        subscribers.forEach((sub) => sub());
    }

    return [read, set];
}

export function efect(fn: () => void): void {
    current = fn;
    fn();
    current = null;
}
