package gr9372.romanov.lab03.holder;

import java.util.*;

public class ArrayHolder {

    final private List<Integer> data = new ArrayList<Integer>();
    private List<Integer> result = new ArrayList<Integer>();
    private Selector selector;
    private Processor processor;
    private Formatter formatter;

    public ArrayHolder(List<Integer> data) {
        this.data.addAll(data);
    }

    public List<Integer> getData() {
        return Collections.unmodifiableList(data);
    }

    public void setFormatter(Formatter formatter) {
        this.formatter = formatter;
    }

    public void setSelector(Selector selector) {
        this.selector = selector;
    }

    public void setProccesor(Processor processor) {
        this.processor = processor;
    }

    /**
     * Обрабатывает элементы и выводит полученный результат.
     */
    public void process() {
        selector.setData(data);
        while (selector.hasNext()) {
            Integer elem = selector.next();
            elem = processor.process(elem);
            result.add(elem);
        }
        formatter.out(result);
    }

}
