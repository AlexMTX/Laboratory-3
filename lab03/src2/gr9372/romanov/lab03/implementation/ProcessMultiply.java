package gr9372.romanov.lab03.implementation;

import gr9372.romanov.lab03.holder.Processor;

public class ProcessMultiply implements Processor {

    @Override
    public int process(int element) {
        return element * 3;
    }

}
