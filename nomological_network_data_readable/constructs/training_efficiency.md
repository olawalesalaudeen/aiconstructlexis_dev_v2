# Training efficiency
**Type:** Construct  
**Referenced in:** 13 papers  

## State of the Field

Across the provided literature, training efficiency is predominantly conceptualized as the degree to which a model achieves a desired learning outcome with fewer resources. While the most common definition, shared by five papers, focuses specifically on the fine-tuning stage, other work extends this concept to model pre-training or more general model adaptation methods. The construct is consistently operationalized by measuring reductions in computational operations, such as FLOPs, alongside decreases in wall-clock time, training throughput, and memory usage. Some research also operationalizes efficiency through accelerated model convergence or the ability to achieve high performance with less training data and fewer epochs, as one study notes achieving higher performance "using only 1.5% of the training data... 20.8% of the training epochs" (Open-Det: An Efficient Learning Framework for Open-Ended Detection). A recurring theme is achieving this efficiency while maintaining model performance, although one paper acknowledges a potential trade-off, offering users the "flexibility to balance between the training accuracy and cost" (Towards Green AI in Fine-tuning Large Language Models via Adaptive Backpropagation). The concept is studied in the context of language model pre-training, and some research suggests it is influenced by constructs such as multimodal alignment and knowledge transferability.

## Sources

**[DePT: Decomposed Prompt Tuning for Parameter-Efficient Fine-tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/e352b765e625934ce86919995e2371aa-Paper-Conference.pdf)**
> The degree to which fine-tuning achieves a desired learning outcome with fewer computational operations and less wall-clock time.

## Relationships

### → Training efficiency
- **Multimodal alignment** (constructs) — *causes*
  > “To further strengthen the alignment between Vision and Language modalities, we present a new Bidirectional Vision-Language Alignment module (BVLA-M) within the Vision-Language Aligner. This module is designed to improve the alignment of vision queries with text embeddings, thereby enhancing training efficiency and overall performance.”
  - [Open-Det: An Efficient Learning Framework for Open-Ended Detection](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cao25h/cao25h.pdf)

### Associated with
- **Language model pre-training** (behaviors tasks)
  > “Efficient optimization is critical in pre-training large models (LMs) at scale”
  - [How Does Critical Batch Size Scale in Pre-training?](https://proceedings.iclr.cc/paper_files/paper/2025/file/a6f14f95d9c9443927638bcd5d917a7a-Paper-Conference.pdf)
