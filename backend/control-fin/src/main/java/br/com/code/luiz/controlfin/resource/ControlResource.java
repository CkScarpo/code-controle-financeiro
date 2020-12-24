package br.com.code.luiz.controlfin.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.code.luiz.controlfin.models.Control_fin;
import br.com.code.luiz.controlfin.repository.ControlRepository;

@RestController
@RequestMapping(value = "/api")
public class ControlResource {
    
    @Autowired
    ControlRepository controlRepository;

    @GetMapping("/control")
    public List<Control_fin> listControl() {
        return controlRepository.findAll();
    }

    @GetMapping("/control/{id}")
    public Control_fin listControlUnic(@PathVariable(value = "id") long id) {
        return controlRepository.findById(id);
    }

    @PostMapping("/control")
    public Control_fin salveControl(@RequestBody Control_fin control) {
        return controlRepository.save(control);
    }

    @DeleteMapping("/control")
    public void deleteControl(@RequestBody Control_fin control) {
        controlRepository.delete(control);
    }

    @PutMapping("/control")
    public Control_fin updateControl(@RequestBody Control_fin control) {
        return controlRepository.save(control);
    }

}
