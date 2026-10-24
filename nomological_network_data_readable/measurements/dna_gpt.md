# DNA-GPT
**Type:** Measurement  
**Referenced in:** 8 papers  

## State of the Field

Across the provided literature, DNA-GPT (Divergent N-Gram Analysis) is consistently defined as a training-free, zero-shot method for detecting machine-generated text. The procedure, as detailed in its proposing paper, involves truncating a given text, using the preceding portion to have a language model regenerate the remaining part, and then analyzing the divergence between the original and the regenerated completions. This analysis of divergence is the basis for identifying AI authorship. The method is designed to function in both black-box and white-box settings. In subsequent research, DNA-GPT is positioned as a typical training-free approach, often grouped with methods like DetectGPT, and is used as a baseline for evaluating new detection techniques. One paper notes that the reliability of its statistical metrics is dependent on the text having a sufficient token length.

## Sources

**[DNA-GPT: Divergent N-Gram Analysis for Training-Free Detection of GPT-Generated Text](https://proceedings.iclr.cc/paper_files/paper/2024/file/d4ce6738e84876aa79f13c8bc8b7c5eb-Paper-Conference.pdf)**
> A zero-shot detection method based on divergence between multiple completions of a truncated passage.

## Relationships

### → DNA-GPT
- **AI-generated text detection** (behaviors tasks) — *measured_by*
  > For detection algorithms, we consider diverse methods including training-free LogRank (Solaiman et al., 2019), DetectGPT (Mitchell et al., 2023), DNA-GPT (Yang et al., 2024), Fast-DetectGPT (Bao et al., 2024), Raidar (Mao et al., 2024), TOCSIN (Ma and Wang, 2024), and training-based RoBERTa (Liu, 2019) provided by OpenAI and the R-detect (Song et al., 2025). (Section 4.1)
  - [Your Language Model Can Secretly Write Like Humans: Contrastive Paraphrase Attacks on LLM-Generated Text Detectors](https://aclanthology.org/2025.emnlp-main.433.pdf)
