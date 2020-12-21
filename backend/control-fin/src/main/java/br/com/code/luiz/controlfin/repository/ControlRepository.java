package br.com.code.luiz.controlfin.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.code.luiz.controlfin.models.Control_fin;

public interface ControlRepository extends JpaRepository<Control_fin, Long> {
    
    Control_fin findById(long id);
    
}
