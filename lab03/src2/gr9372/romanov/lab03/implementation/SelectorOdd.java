package gr9372.romanov.lab03.implementation;

public class SelectorOdd extends SelectorAbstract {

    @Override
    public boolean hasNext() {
        return iterator.hasNext();
    }

    @Override
    public Integer next() {
        int temp = iterator.next();
        if (temp % 2 != 0)
            return temp;
        return null;
    }

    @Override
    public void remove() {
        System.out.println("Метод не определен");
    }

}
