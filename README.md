# Vishal Creations - Image Gallery Documentation

## Image Gallery Component

The `ImageGallery` component is a fully-featured, responsive image gallery designed for showcasing company facilities, products, and operations.

### Features

- **Responsive Design**: Adapts to all screen sizes (mobile, tablet, desktop)
- **Multiple Navigation Methods**: 
  - Arrow buttons for next/previous navigation
  - Thumbnail navigation
  - Dot indicators
  - Keyboard navigation (arrow keys, escape)
- **Auto-play Functionality**: Automatic slideshow with customizable intervals
- **Modal View**: Full-screen image viewing with navigation
- **Performance Optimized**: 
  - Lazy loading for images
  - Image preloading for smooth transitions
  - Loading states and progress indicators
- **Accessibility Features**:
  - ARIA labels for screen readers
  - Keyboard navigation support
  - Alt text for all images
- **Smooth Animations**: CSS transitions and hover effects

### Usage

```tsx
import { ImageGallery } from '../components/ImageGallery';

const galleryImages = [
  {
    id: 1,
    src: 'path/to/image.jpg',
    alt: 'Description of image',
    title: 'Image Title',
    category: 'Category Name'
  },
  // ... more images
];

<ImageGallery 
  images={galleryImages} 
  autoPlay={true} 
  autoPlayInterval={6000} 
/>
```

### Props

- `images`: Array of image objects with id, src, alt, title, and category
- `autoPlay`: Boolean to enable/disable auto-play (default: true)
- `autoPlayInterval`: Time in milliseconds between slides (default: 5000)

### Adding/Removing Images

To add new images to the gallery:

1. Add image objects to the `galleryImages` array in `src/pages/Home.tsx`
2. Each image object should include:
   - `id`: Unique identifier (number)
   - `src`: Image URL (optimized for web, recommended size: 1200px width)
   - `alt`: Descriptive alt text for accessibility
   - `title`: Display title for the image
   - `category`: Category tag for organization

Example:
```tsx
{
  id: 9,
  src: 'https://example.com/new-image.jpg',
  alt: 'Description of new image',
  title: 'New Image Title',
  category: 'New Category'
}
```

### Image Optimization Recommendations

1. **File Format**: Use WebP for modern browsers, with JPEG fallback
2. **File Size**: Keep images under 200KB for optimal loading
3. **Dimensions**: Recommended width: 1200px, height: 600-800px
4. **Compression**: Use 80-85% quality for JPEG images
5. **CDN**: Use a CDN service for faster image delivery

### Performance Features

- **Lazy Loading**: Images load only when needed
- **Preloading**: Next/previous images are preloaded for smooth navigation
- **Progress Indicators**: Visual feedback during loading
- **Optimized Rendering**: Efficient React rendering with proper key props

### Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Accessibility Compliance

- WCAG 2.1 AA compliant
- Screen reader support
- Keyboard navigation
- High contrast support
- Focus indicators

### Customization

The gallery can be customized by modifying:

1. **Colors**: Update Tailwind classes in the component
2. **Animations**: Modify transition durations and effects
3. **Layout**: Adjust container sizes and spacing
4. **Auto-play**: Change timing or disable entirely

### Technical Implementation

- Built with React 18+ and TypeScript
- Styled with Tailwind CSS
- Uses Lucide React for icons
- Implements modern React patterns (hooks, functional components)
- Optimized for performance with useCallback and useEffect

### Maintenance

- Regularly update image URLs if using external sources
- Monitor image loading performance
- Update alt text for SEO and accessibility
- Consider implementing image compression pipeline for user uploads