package hu.elte.warehouseproject.controllers;

import hu.elte.warehouseproject.repositories.UserRepository;
import hu.elte.warehouseproject.security.AuthenticatedUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("user")
public class UserController{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthenticatedUser authenticatedUser;

    @GetMapping("/logout")
    public ResponseEntity logout() {
        authenticatedUser.setUser(null);
        return ResponseEntity.ok(null);
    }

}