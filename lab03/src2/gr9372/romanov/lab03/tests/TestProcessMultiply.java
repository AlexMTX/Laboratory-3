package gr9372.romanov.lab03.tests;

import gr9372.romanov.lab03.holder.Processor;
import gr9372.romanov.lab03.implementation.ProcessMultiply;

import org.junit.Assert;
import org.junit.Test;

public class TestProcessMultiply {

    @Test
    public void TestMultiply() {
        Processor proc = new ProcessMultiply();
        Assert.assertTrue(proc.process(2) == 6);
    }

}
