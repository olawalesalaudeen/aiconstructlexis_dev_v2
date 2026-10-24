# Test generation ability
**Type:** Construct  
**Referenced in:** 2 papers  
**Also known as:** Test generation capability, Test generation performance, Test generation  

## State of the Field

The overall latent capability of a model to produce effective and high-quality software tests that cover code paths and detect bugs.

## Sources

**[TestGenEval: A Real World Unit Test Generation and Test Completion Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/26ded5c8ee8ec1bc4caced4e1c9b1584-Paper-Conference.pdf) (as "Test generation performance")**
> The overall latent capability of a model to produce effective and high-quality software tests that cover code paths and detect bugs.

**[LiveCodeBench: Holistic and Contamination Free Evaluation of Large Language Models for Code](https://proceedings.iclr.cc/paper_files/paper/2025/file/94074dd5a072d28ff75a76dabed43767-Paper-Conference.pdf) (as "Test generation capability")**
> The model's ability to reason about a problem's requirements to produce valid test cases, specifically the expected output for a given input.

## Relationships

### Test generation ability →
- **LiveCodeBench** (measurements) — *measured_by*
  > "introduce the test output prediction scenario to evaluate the models’ test generation capabilities"
  - [LiveCodeBench: Holistic and Contamination Free Evaluation of Large Language Models for Code](https://proceedings.iclr.cc/paper_files/paper/2025/file/94074dd5a072d28ff75a76dabed43767-Paper-Conference.pdf)

### → Test generation ability
- **Code reasoning** (constructs) — *causes*
  > models struggle to generate high-coverage test suites, with the best model, GPT-4o, achieving an average coverage of only 35.2%. This is primarily due to models struggling to reason about execution
  - [TestGenEval: A Real World Unit Test Generation and Test Completion Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/26ded5c8ee8ec1bc4caced4e1c9b1584-Paper-Conference.pdf)
