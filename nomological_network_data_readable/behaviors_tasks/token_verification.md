# Token verification
**Type:** Behavior  
**Referenced in:** 6 papers  

## State of the Field

Across the provided literature, token verification is consistently defined as the process of checking drafted tokens against a target model's predictions to decide whether they are accepted or rejected. This behavior is also referred to as "token acceptance," with a focus on the rate and probability of accepting or rejecting tokens. The data situates this behavior as a component of speculative decoding, where a target model evaluates draft tokens. The verification is operationalized as a parallel process, where, as one paper notes, "the original target model verifies these tokens in parallel." The underlying mechanism is described as "token-level rejection sampling" which guarantees the final sequence follows the target model's distribution. A specific acceptance rule is also mentioned: "the target model accepts a candidate token if it assigns the same or higher probability given the context."

## Sources

**[PEARL: Parallel Speculative Decoding with Adaptive Draft Length](https://proceedings.iclr.cc/paper_files/paper/2025/file/03b1043052700b1a471996b0baf309d4-Paper-Conference.pdf)**
> Checking drafted tokens against the target model's predictions to decide whether they are accepted or rejected.

**[Multi-Draft Speculative Sampling: Canonical Decomposition and Theoretical Limits](https://proceedings.iclr.cc/paper_files/paper/2025/file/04cdf500730af7733a6b13cbbc230206-Paper-Conference.pdf) (as "Token acceptance")**
> Accepting or rejecting proposed draft tokens during speculative decoding or token-level selection.

## Relationships

### Associated with
- **Speculative decoding** (behaviors tasks)
  > “and then the target model verifies these draft tokens in parallel within a single forward”
  - [PEARL: Parallel Speculative Decoding with Adaptive Draft Length](https://proceedings.iclr.cc/paper_files/paper/2025/file/03b1043052700b1a471996b0baf309d4-Paper-Conference.pdf)
