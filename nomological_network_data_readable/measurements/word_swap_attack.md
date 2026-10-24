# Word swap attack
**Type:** Measurement  
**Referenced in:** 3 papers  
**Also known as:** Text Attack, Word Swap Attack  

## State of the Field

A data contamination procedure where words are randomly swapped with a generic token to test robustness.

## Sources

**[Tight Clusters Make Specialized Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/854a9ab0f323b841955e70ca383b27d1-Paper-Conference.pdf) (as "Text Attack")**
> A data contamination procedure where words are randomly swapped with a generic token to test robustness.

**[Transformer Meets Twicing: Harnessing Unattended Residual Information](https://proceedings.iclr.cc/paper_files/paper/2025/file/90cdfb6ac8d9f96bdf0ce92f5f05c391-Paper-Conference.pdf) (as "Word Swap Attack")**
> A data contamination procedure used for evaluation where words in a text sequence are randomly swapped with a generic token to test model robustness.

## Relationships

### Associated with
- **SST-2** (measurements)
  > Since labels are not required for this task, we select the SST-2 dataset to focus solely on the models’ ability to adapt to manipulated prompts without being influenced by label accuracy. (Section 4.6)
  - [Direct Prompt Optimization with Continuous Representations](https://aclanthology.org/2025.acl-long.133.pdf)
