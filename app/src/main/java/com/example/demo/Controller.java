package com.example.demo;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.logic.Game;
import com.example.logic.Winner;
 
@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")
public class Controller {
	
	
	public Game game = new Game();
	
	@GetMapping("/{id}")
	public Winner doPlay(@PathVariable int id) {
		game.doPlay(id);
		return game.getResult();
	}
}
