package dto;

import entities.Chuck;

/**
 *
 * @author David
 */
public class ChuckDTO {
    
    private int id;
    private String joke;
    
    public ChuckDTO(Chuck c) {
        this.id = c.getId();
        this.joke = c.getJoke();
    }

    public ChuckDTO() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getJoke() {
        return joke;
    }

    public void setJoke(String joke) {
        this.joke = joke;
    }
    

}
