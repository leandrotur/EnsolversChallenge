package com.rest.webservices.restfulwebservices.todo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.OrderBy;

@Repository
public interface TodoJpaRepository extends JpaRepository<Todo, Long>{

	List<Todo> findByUsername(String username);
}